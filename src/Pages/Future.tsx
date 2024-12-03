
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Wifi, SprayCanIcon as Spray, Leaf } from 'lucide-react'
import { AppSidebar } from "@/components/Sidebar/app-sidebar"
import {
    Breadcrumb
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"


interface InnovativeFeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    advantages: string[];
}

const InnovativeFeature: React.FC<InnovativeFeatureProps> = ({ icon, title, description, advantages }) => (

    <Card className="h-full">
        <CardHeader>
            <div className="flex items-center space-x-2">
                {icon}
                <CardTitle>{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <CardDescription className="mb-4">{description}</CardDescription>
            <h4 className="font-semibold mb-2">How It Works:</h4>
            <ul className="list-disc pl-5 mb-4">
                {description.split('. ').map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h4 className="font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc pl-5">
                {advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                ))}
            </ul>
        </CardContent>
    </Card>
)

export default function FutureFeatures() {
    const features = [
        {
            icon: <Brain className="w-6 h-6 text-purple-500" />,
            title: "AI-Based Waste Sorting",
            description: "A camera captures the image of the waste. An AI model processes the image and determines the type of waste. The appropriate lid or compartment opens automatically",
            advantages: [
                "Accurate sorting",
                "Reduces human error in waste management"
            ]
        },
        {
            icon: <Wifi className="w-6 h-6 text-blue-500" />,
            title: "Real-Time Monitoring via IoT",
            description: "Add IoT connectivity to the dustbin, allowing users to monitor its status remotely via a web or mobile interface",
            advantages: [
                "Ideal for smart cities",
                "Enables better waste collection planning"
            ]
        },
        {
            icon: <Spray className="w-6 h-6 text-green-500" />,
            title: "Automated Cleaning Mechanism",
            description: "A sensor detects when the bin is empty. A nozzle sprays a disinfectant solution evenly. Ensures hygiene and odor control",
            advantages: [
                "Reduces manual cleaning efforts",
                "Keeps the bin clean and germ-free"
            ]
        },
        {
            icon: <Leaf className="w-6 h-6 text-yellow-500" />,
            title: "Compost Generation for Organic Waste",
            description: "Separate chamber for composting organic waste. Aeration system to speed up decomposition. Displays compost readiness status on the LCD or app",
            advantages: [
                "Dual output: biogas and compost",
                "Supports urban gardening and farming"
            ]
        }
    ]

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "250px",
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <SidebarInset>
                <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <h1 className="text-lg font-semibold">Smart Dustbin</h1>
                    </Breadcrumb>
                </header>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Innovative Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <InnovativeFeature key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

