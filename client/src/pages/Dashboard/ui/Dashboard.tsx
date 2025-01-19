import { useEffect, useState } from "react"
import { SideBar } from "@/widgets/Sidebar/ui/SideBar"
import { DashboardChart } from "@/features/dashboard/DashboardChart"
import { Loader } from "@/shared/ui/loader/Loader"
import { fetchTasks } from "@/entities/tasks/model/slice/taskSlice"
import { useAppDispatch, useAppSelector } from "@/features/auth"
import { RootState } from "@/app/store/store"

export function Dashboard() {
  const dispatch = useAppDispatch()
  const { tasks, isLoading, error } = useAppSelector((state: RootState) => state.tasks)
  const [dat, setDat] = useState<{ in: number; title: string }[]>([])

  useEffect(() => {
    dispatch(fetchTasks("http://localhost:7000/tasks"))
  }, [dispatch])

  useEffect(() => {
    if (tasks.length > 0) {
      const newData = tasks.map((task, index) => ({
        in: index + 1,
        title: task.title.length,
      }))
      setDat(newData)
    }
  }, [tasks])

  const data = {
    labels: dat.map((row) => row.in),
    datasets: [
      {
        label: "Acquisitions by year",
        data: dat.map((row) => row.title),
        borderColor: "#5fb872c7",
        backgroundColor: "rgba(43, 29, 32, 0.2)",
      },
    ],
  }

  const options = {
    animator: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  }

  return (
    <>
      <div>Dashboard</div>
      <Loader isLoading={isLoading} error={error} />
      <DashboardChart data={data} options={options} />
      <SideBar />
    </>
  )
}
