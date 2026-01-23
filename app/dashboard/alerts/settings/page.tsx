import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThresholdSlider } from "@/components/alerts/threshold-slider"
import { ArrowLeft, Bell, Mail, MessageSquare, Phone, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function AlertSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/alerts">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Alert Settings</h1>
          <p className="text-sm text-muted-foreground">Configure thresholds, notifications, and escalation rules</p>
        </div>
      </div>

      <Tabs defaultValue="thresholds" className="space-y-6">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="thresholds">Thresholds</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="escalation">Escalation</TabsTrigger>
          <TabsTrigger value="recipients">Recipients</TabsTrigger>
        </TabsList>

        <TabsContent value="thresholds" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <ThresholdSlider
              parameter="pH Level"
              unit="pH"
              min={4}
              max={10}
              criticalLow={5.5}
              warningLow={6.5}
              warningHigh={7.5}
              criticalHigh={8.5}
            />
            <ThresholdSlider
              parameter="Dissolved Oxygen"
              unit="mg/L"
              min={0}
              max={15}
              criticalLow={4}
              warningLow={5}
              warningHigh={12}
              criticalHigh={14}
            />
            <ThresholdSlider
              parameter="Ammonia"
              unit="ppm"
              min={0}
              max={3}
              criticalLow={0}
              warningLow={0}
              warningHigh={0.5}
              criticalHigh={1.0}
            />
            <ThresholdSlider
              parameter="Water Temperature"
              unit="°C"
              min={15}
              max={35}
              criticalLow={18}
              warningLow={22}
              warningHigh={28}
              criticalHigh={32}
            />
          </div>
          <div className="flex justify-end">
            <Button className="bg-primary">Save Thresholds</Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4">Notification Channels</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">In-App Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive alerts within the dashboard</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Voice Call (Critical Only)</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4">Quiet Hours</h3>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                Suppress non-critical notifications during specified hours
              </p>
              <Switch />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="quiet-start">Start Time</Label>
                <Input id="quiet-start" type="time" defaultValue="22:00" className="mt-1 bg-secondary/50" />
              </div>
              <div>
                <Label htmlFor="quiet-end">End Time</Label>
                <Input id="quiet-end" type="time" defaultValue="07:00" className="mt-1 bg-secondary/50" />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="escalation" className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4">Escalation Rules</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Define how alerts should escalate if not acknowledged within certain timeframes.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">First Escalation</p>
                  <p className="text-sm text-muted-foreground">If not acknowledged within</p>
                </div>
                <Input type="number" defaultValue="15" className="w-20 bg-background" />
                <span className="text-sm text-muted-foreground">minutes</span>
                <span className="text-sm">→ Send SMS</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">Second Escalation</p>
                  <p className="text-sm text-muted-foreground">If still not acknowledged within</p>
                </div>
                <Input type="number" defaultValue="30" className="w-20 bg-background" />
                <span className="text-sm text-muted-foreground">minutes</span>
                <span className="text-sm">→ Voice Call</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">Final Escalation</p>
                  <p className="text-sm text-muted-foreground">If still not acknowledged within</p>
                </div>
                <Input type="number" defaultValue="60" className="w-20 bg-background" />
                <span className="text-sm text-muted-foreground">minutes</span>
                <span className="text-sm">→ Notify All Team</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="recipients" className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Alert Recipients</h3>
              <Button size="sm" className="gap-2 bg-primary">
                <Users className="h-4 w-4" />
                Add Recipient
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">John Doe (You)</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com • Owner</p>
                  </div>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">All Alerts</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center text-success font-medium">
                    SM
                  </div>
                  <div>
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">sarah.m@example.com • Manager</p>
                  </div>
                </div>
                <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">Critical Only</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-medium">
                    TJ
                  </div>
                  <div>
                    <p className="font-medium">Tom Johnson</p>
                    <p className="text-sm text-muted-foreground">tom.j@example.com • Technician</p>
                  </div>
                </div>
                <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded">Warning & Critical</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
