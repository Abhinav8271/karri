import Link from "next/link";
import { getAssessments } from "@/actions/interview";
import { Button } from "@/components/ui/button";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">
          Interview Preparation
        </h1>
      </div>

      {!assessments || assessments.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-lg border border-border p-8 text-center">
          <p className="text-lg text-muted-foreground">
            No quizzes taken yet. Start your first mock interview 🚀
          </p>
          <Link href="/interview/mock">
            <Button size="lg">Go to Mock Interview</Button>
          </Link>
        </div>
      ) : (
        <>
          <StatsCards assessments={assessments} />
          <PerformanceChart assessments={assessments} />
          <QuizList assessments={assessments} />
        </>
      )}
    </div>
  );
}