"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", raised: 300, remaining: 100 },
    { month: "February", raised: 305, remaining: 200 },
    { month: "March", raised: 237, remaining: 120 },
    { month: "April", raised: 73, remaining: 190 },
    { month: "May", raised: 209, remaining: 130 },
    { month: "June", raised: 214, remaining: 140 },
]

const chartConfig = {
    raised: {
        label: "Raised",
        color: "hsl(var(--chart-1))",
    },
    remaining: {
        label: "Remaining",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export const FundRaisingChart = ()=> {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Bar Chart - Target + Total Raise</CardTitle>
                <CardDescription>Upto your last 10 post</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="raised"
                            stackId="a"
                            fill="var(--color-raised)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="remaining"
                            stackId="a"
                            fill="var(--color-remaining)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
