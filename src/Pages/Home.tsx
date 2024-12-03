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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Recycle, PenToolIcon as Tool } from 'lucide-react'

const Home = () => {
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
                  <h1 className="text-4xl font-bold mb-6">Smart Dustbin with Two Compartments</h1>

                  <Tabs defaultValue="features" className="mb-8">
                      <TabsList className="grid w-full grid-cols-5">
                          <TabsTrigger value="features">Features</TabsTrigger>
                          <TabsTrigger value="usage">How to Use</TabsTrigger>
                          <TabsTrigger value="advantages">Advantages</TabsTrigger>
                          <TabsTrigger value="disadvantages">Disadvantages</TabsTrigger>
                          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                      </TabsList>

                      <TabsContent value="features">
                          <Card>
                              <CardHeader>
                                  <CardTitle>Smart Dustbin Features</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <h3 className="text-lg font-semibold mb-2">1. Functionality</h3>
                                  <h4 className="font-medium mt-4">Chemical Waste Compartment:</h4>
                                  <ul className="list-disc pl-6 mb-2">
                                      <li>Detects hazardous chemical waste using the MQ-6 sensor</li>
                                      <li>Automatically opens the lid when chemical waste is detected</li>
                                      <li>Alerts the user when the compartment is full</li>
                                      <li>Includes a biogas generation system where waste decomposes to produce biogas for cooking</li>
                                  </ul>
                                  <h4 className="font-medium mt-4">Plastic Waste Compartment:</h4>
                                  <ul className="list-disc pl-6 mb-2">
                                      <li>Detects plastic waste using an IR sensor</li>
                                      <li>Automatically opens the lid when waste is detected</li>
                                      <li>Alerts the user when the compartment is full</li>
                                      <li>Allows transferring plastic waste to a burning compartment at the backside for incineration</li>
                                      <li>Converts burned ash into fertilizer</li>
                                  </ul>
                                  <h3 className="text-lg font-semibold mt-4 mb-2">2. Renewable Energy Integration</h3>
                                  <ul className="list-disc pl-6">
                                      <li>Equipped with solar panels to generate energy</li>
                                      <li>Powers the entire system, making it eco-friendly</li>
                                  </ul>
                              </CardContent>
                          </Card>
                      </TabsContent>

                      <TabsContent value="usage">
                          <Card>
                              <CardHeader>
                                  <CardTitle>How to Use</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <h3 className="text-lg font-semibold mb-2">1. Chemical Waste Disposal:</h3>
                                  <ul className="list-disc pl-6 mb-4">
                                      <li>Place chemical waste near the bin</li>
                                      <li>The sensor will detect the waste, and the lid will open automatically</li>
                                      <li>When the compartment is full, an alert will remind you to empty it</li>
                                      <li>After emptying, close the lid to initiate the biogas generation process</li>
                                  </ul>
                                  <h3 className="text-lg font-semibold mb-2">2. Plastic Waste Disposal:</h3>
                                  <ul className="list-disc pl-6 mb-4">
                                      <li>Place plastic waste near the bin</li>
                                      <li>The IR sensor detects waste, and the lid will open automatically</li>
                                      <li>When full, remove the plastic waste and transfer it to the burning compartment</li>
                                      <li>Burn the waste, and collect the ash to use as fertilizer</li>
                                  </ul>
                                  <h3 className="text-lg font-semibold mb-2">3. Energy Usage:</h3>
                                  <ul className="list-disc pl-6">
                                      <li>Ensure the solar panel is clean for optimal energy generation</li>
                                      <li>Use the biogas produced for cooking or other energy needs</li>
                                  </ul>
                              </CardContent>
                          </Card>
                      </TabsContent>

                      <TabsContent value="advantages">
                          <Card>
                              <CardHeader>
                                  <CardTitle>Advantages</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="flex items-start">
                                          <CheckCircle className="mr-2 mt-1 text-green-500" />
                                          <div>
                                              <h3 className="font-semibold">Eco-Friendly</h3>
                                              <ul className="list-disc pl-6">
                                                  <li>Promotes proper waste segregation</li>
                                                  <li>Reduces environmental pollution through plastic waste incineration</li>
                                                  <li>Utilizes renewable solar energy and generates biogas</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="flex items-start">
                                          <Recycle className="mr-2 mt-1 text-blue-500" />
                                          <div>
                                              <h3 className="font-semibold">Resource Utilization</h3>
                                              <ul className="list-disc pl-6">
                                                  <li>Converts waste into useful byproducts: biogas and fertilizer</li>
                                                  <li>Ash from plastic waste can enrich soil fertility</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="flex items-start">
                                          <CheckCircle className="mr-2 mt-1 text-green-500" />
                                          <div>
                                              <h3 className="font-semibold">Automation</h3>
                                              <ul className="list-disc pl-6">
                                                  <li>Reduces human effort with sensor-based waste detection and lid operation</li>
                                                  <li>Sends alerts when compartments are full</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="flex items-start">
                                          <Recycle className="mr-2 mt-1 text-blue-500" />
                                          <div>
                                              <h3 className="font-semibold">Sustainability</h3>
                                              <ul className="list-disc pl-6">
                                                  <li>Supports a circular economy by converting waste into energy and fertilizers</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </CardContent>
                          </Card>
                      </TabsContent>

                      <TabsContent value="disadvantages">
                          <Card>
                              <CardHeader>
                                  <CardTitle>Disadvantages</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="flex items-start">
                                          <AlertTriangle className="mr-2 mt-1 text-yellow-500" />
                                          <div>
                                              <h3 className="font-semibold">Initial Cost</h3>
                                              <p>High cost of installation due to solar panels, sensors, and biogas equipment</p>
                                          </div>
                                      </div>
                                      <div className="flex items-start">
                                          <AlertTriangle className="mr-2 mt-1 text-yellow-500" />
                                          <div>
                                              <h3 className="font-semibold">Maintenance</h3>
                                              <p>Requires regular maintenance for sensors, solar panels, and the biogas system</p>
                                          </div>
                                      </div>
                                      <div className="flex items-start">
                                          <AlertTriangle className="mr-2 mt-1 text-yellow-500" />
                                          <div>
                                              <h3 className="font-semibold">Safety Concerns</h3>
                                              <p>The burning compartment for plastic waste must be handled carefully to avoid hazards</p>
                                          </div>
                                      </div>
                                      <div className="flex items-start">
                                          <AlertTriangle className="mr-2 mt-1 text-yellow-500" />
                                          <div>
                                              <h3 className="font-semibold">Space Requirement</h3>
                                              <p>Requires ample space for two compartments, a biogas generator, and a burning chamber</p>
                                          </div>
                                      </div>
                                  </div>
                              </CardContent>
                          </Card>
                      </TabsContent>

                      <TabsContent value="maintenance">
                          <Card>
                              <CardHeader>
                                  <CardTitle>How to Repair and Maintain</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <h3 className="text-lg font-semibold mb-2">Maintenance Tips</h3>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                      {[
                                          {
                                              title: "Sensors",
                                              tips: [
                                                  "Regularly clean the MQ-6 and IR sensors to ensure accurate detection",
                                                  "Replace faulty sensors promptly"
                                              ]
                                          },
                                          {
                                              title: "Lids and Motors",
                                              tips: [
                                                  "Lubricate moving parts like servo motors and hinges",
                                                  "Check and recalibrate the lid operation if it becomes sluggish"
                                              ]
                                          },
                                          {
                                              title: "Solar Panels",
                                              tips: [
                                                  "Clean the panels regularly to maintain energy efficiency",
                                                  "Inspect wiring and connections for wear or damage"
                                              ]
                                          },
                                          {
                                              title: "Biogas System",
                                              tips: [
                                                  "Remove sludge and clean the biogas tank periodically",
                                                  "Ensure there are no leaks in the system"
                                              ]
                                          },
                                          {
                                              title: "Burning Compartment",
                                              tips: [
                                                  "Clean the ash tray after each use",
                                                  "Ensure proper ventilation to prevent buildup of harmful fumes"
                                              ]
                                          }
                                      ].map((item, index) => (
                                          <div key={index} className="flex items-start">
                                              <Tool className="mr-2 mt-1 text-gray-500" />
                                              <div>
                                                  <h4 className="font-semibold">{item.title}</h4>
                                                  <ul className="list-disc pl-6">
                                                      {item.tips.map((tip, tipIndex) => (
                                                          <li key={tipIndex}>{tip}</li>
                                                      ))}
                                                  </ul>
                                              </div>
                                          </div>
                                      ))}
                                  </div>

                                  <h3 className="text-lg font-semibold mb-2">Repair Guidelines</h3>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {[
                                          {
                                              title: "Sensor Malfunction",
                                              steps: [
                                                  "If sensors fail to detect waste, check for debris blocking the sensor",
                                                  "Rewire or replace the sensor if necessary"
                                              ]
                                          },
                                          {
                                              title: "Motor Issues",
                                              steps: [
                                                  "Inspect servo motors for wiring issues or wear",
                                                  "Replace motors if they stop functioning"
                                              ]
                                          },
                                          {
                                              title: "Solar Energy Problems",
                                              steps: [
                                                  "Check solar panel connections and replace the battery if it fails to store energy",
                                                  "Inspect the charge controller for faults"
                                              ]
                                          },
                                          {
                                              title: "Biogas System Damage",
                                              steps: [
                                                  "Seal any leaks in the tank with epoxy or professional-grade adhesives",
                                                  "Replace damaged pipes or fittings"
                                              ]
                                          },
                                          {
                                              title: "Burning Compartment",
                                              steps: [
                                                  "If the incinerator fails, inspect the heating elements or burners for damage",
                                                  "Replace faulty components with similar-rated parts"
                                              ]
                                          }
                                      ].map((item, index) => (
                                          <div key={index} className="flex items-start">
                                              <Tool className="mr-2 mt-1 text-gray-500" />
                                              <div>
                                                  <h4 className="font-semibold">{item.title}</h4>
                                                  <ul className="list-disc pl-6">
                                                      {item.steps.map((step, stepIndex) => (
                                                          <li key={stepIndex}>{step}</li>
                                                      ))}
                                                  </ul>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </CardContent>
                          </Card>
                      </TabsContent>
                  </Tabs>

                  <Card>
                      <CardHeader>
                          <CardTitle>Conclusion</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>
                              This Smart Dustbin project integrates waste management, renewable energy, and eco-friendly solutions.
                              Regular maintenance and proper handling ensure long-term functionality, making it a valuable addition
                              to sustainable living practices.
                          </p>
                      </CardContent>
                  </Card>
              </div>
          </SidebarInset>
      </SidebarProvider>
  )
}

export default Home