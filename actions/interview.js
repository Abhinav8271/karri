"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { mcqBank } from "@/app/lib/quizQuestions";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

export async function generateQuiz() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      industry: true,
    },
  });

  if (!user || !user.industry) {
    throw new Error("User industry not found");
  }

  // example stored value: tech-software-development
  const parts = user.industry.split("-");

  const industryKey = parts[0];
  const subIndustryKey = parts.slice(1).join("-");

  const industryMap = {
    tech: "Technology",
    finance: "Finance",
    healthcare: "Healthcare",
    education: "Education",
    marketing: "Marketing",
    consulting: "Consulting",
    manufacturing: "Manufacturing",
    retail: "Retail",
  };

  const industryName = industryMap[industryKey];

  if (!industryName) {
    throw new Error("Industry not supported");
  }

  // convert artificial-intelligence/machine-learning → Artificial Intelligence/Machine Learning
  const subIndustryName = subIndustryKey
    .split("/")
    .map((segment) =>
      segment
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    )
    .join("/");

  const industryKeyInMcqBank =
    industryName in mcqBank ? industryName : industryName.toLowerCase();

  const questionsPool = mcqBank[industryKeyInMcqBank]?.[subIndustryName];

  if (!questionsPool || questionsPool.length === 0) {
    throw new Error(
      `No questions found for ${industryName} -> ${subIndustryName}`
    );
  }

  // shuffle questions
  const shuffled = [...questionsPool].sort(() => Math.random() - 0.5);

  // return 3 random questions
  return shuffled.slice(0, 3);
}

export async function saveQuizResult(questions, answers, score) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  const questionResults = questions.map((q, index) => ({
    question: q.question,
    answer: q.correctAnswer,
    userAnswer: answers[index],
    isCorrect: q.correctAnswer === answers[index],
    explanation: q.explanation,
  }));

  const wrongAnswers = questionResults.filter((q) => !q.isCorrect);

  let improvementTip = null;

  if (wrongAnswers.length > 0) {
    const wrongQuestionsText = wrongAnswers
      .map(
        (q) =>
          `Question: "${q.question}"
Correct Answer: "${q.answer}"
User Answer: "${q.userAnswer}"`
      )
      .join("\n\n");

    const improvementPrompt = `
The user answered the following questions incorrectly:

${wrongQuestionsText}

Provide a short improvement tip to help them improve.
Keep it under 2 sentences and make it encouraging.
`;

    try {
      const tipResult = await model.generateContent(improvementPrompt);
      improvementTip = tipResult.response.text().trim();
    } catch (error) {
      console.error("Error generating improvement tip:", error);
      improvementTip =
        "Review the relevant concepts and practice similar interview questions.";
    }
  }

  try {
    const assessment = await db.assessment.create({
      data: {
        userId: user.id,
        quizScore: score,
        questions: questionResults,
        category: "Technical",
        improvementTip,
      },
    });

    return assessment;
  } catch (error) {
    console.error("Error saving quiz result:", error);
    throw new Error("Failed to save quiz result");
  }
}

export async function getAssessments() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const assessments = await db.assessment.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return assessments;
  } catch (error) {
    console.error("Error fetching assessments:", error);
    throw new Error("Failed to fetch assessments");
  }
}