"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { useTestContext } from "@/context/TestContext"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect , useState} from "react"
import { evalResults } from "@/lib/utils"
import { PrimaryButton } from "../Buttons/PrimaryButton"
const chartConfig = {
  response: {
    label: "Respuestas",
  },
  correct: {
    label: "Correctas",
    color: "#4ade80",
  },
  incorrect: {
    label: "Incorrectas",
    color: "#f87171",
  },
} satisfies ChartConfig

type ChartData = [
  { correct: "correct", response: number, fill: string },
  { correct: "incorrect", response: number, fill: string },
  { correct: "unResponse", response: number, fill: string }
]

const initialChartData : ChartData= [
  { correct: "correct", response: 0, fill: "#4ade80" },
  { correct: "incorrect", response: 0, fill: "#f87171" },
  { correct: "unResponse", response: 0, fill: "#666666" }
]

type Props = {
  returnTest: () => void
}

export function DashboardResults({returnTest}: Props) {
  const { tests } = useTestContext()
  const [chartData, setChartData] = useState(initialChartData)

  

  const average = React.useMemo(() => {
    let total : number= 0
    chartData.forEach(data => total += data.response)
    return `${Math.round((chartData[0].response * 100)/total)}`
  }, [ chartData ])

  useEffect(() => {
    const results = evalResults(tests)

    const newChart =chartData.map( chart => {
      return {
        ...chart,
        response: results[chart.correct]
      }
    }) as ChartData

    setChartData(newChart)
  },[tests])

  return (
    <Card className="flex flex-col h-full">

      <CardHeader className="items-center pb-0">
        <CardTitle>Test - Resultados</CardTitle>

        <CardDescription>Representados en por ciento</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={chartData}
              dataKey="response"
              nameKey="correct"
              innerRadius={60}
              strokeWidth={5}
            >

              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {average}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Acertadas
                        </tspan>
                      </text>
                    )
                  }
                }}
              />

            </Pie>
          </PieChart>

        </ChartContainer>
      </CardContent>
      <CardFooter>
        <PrimaryButton onClick={returnTest}>
          Ver Resultados
        </PrimaryButton>
      </CardFooter>
    </Card>
  )
}
