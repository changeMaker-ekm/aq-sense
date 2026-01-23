import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Building,
  Users,
  Plug,
  CreditCard,
  Shield,
  Upload,
  Trash2,
  Plus,
  Key,
  ExternalLink,
  Crown,
} from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account and farm preferences</p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="bg-secondary/50 flex-wrap h-auto gap-1 p-1">
          <TabsTrigger value="account" className="gap-2">
            <User className="h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="farm" className="gap-2">
            <Building className="h-4 w-4" />
            Farm
          </TabsTrigger>
          <TabsTrigger value="team" className="gap-2">
            <Users className="h-4 w-4" />
            Team
          </TabsTrigger>
          <TabsTrigger value="integrations" className="gap-2">
            <Plug className="h-4 w-4" />
            Integrations
          </TabsTrigger>
          <TabsTrigger value="billing" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-6">Profile Information</h3>

            <div className="flex items-start gap-6 mb-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/farmer-avatar.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Upload className="h-4 w-4" />
                  Upload Photo
                </Button>
                <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" defaultValue="John" className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" defaultValue="Doe" className="bg-secondary/50" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" className="bg-secondary/50" />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button className="bg-primary">Save Changes</Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4">Change Password</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current password</Label>
                <Input id="currentPassword" type="password" className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New password</Label>
                <Input id="newPassword" type="password" className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm new password</Label>
                <Input id="confirmPassword" type="password" className="bg-secondary/50" />
              </div>
              <Button className="bg-primary">Update Password</Button>
            </div>
          </div>
        </TabsContent>

        {/* Farm Settings */}
        <TabsContent value="farm" className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-6">Farm Information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="farmName">Farm name</Label>
                <Input id="farmName" defaultValue="Main Greenhouse" className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="pst">
                  <SelectTrigger className="bg-secondary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                    <SelectItem value="cst">Central Time (CT)</SelectItem>
                    <SelectItem value="est">Eastern Time (ET)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="bg-primary">Save Changes</Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-6">Unit Preferences</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Temperature Unit</p>
                  <p className="text-sm text-muted-foreground">Celsius or Fahrenheit</p>
                </div>
                <Select defaultValue="celsius">
                  <SelectTrigger className="w-32 bg-secondary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="celsius">Celsius</SelectItem>
                    <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Volume Unit</p>
                  <p className="text-sm text-muted-foreground">Liters or Gallons</p>
                </div>
                <Select defaultValue="liters">
                  <SelectTrigger className="w-32 bg-secondary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="liters">Liters</SelectItem>
                    <SelectItem value="gallons">Gallons</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Team Settings */}
        <TabsContent value="team" className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Team Members</h3>
              <Button size="sm" className="gap-2 bg-primary">
                <Plus className="h-4 w-4" />
                Invite Member
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/farmer-avatar.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">John Doe</p>
                      <Badge className="bg-primary/10 text-primary border-primary/30">Owner</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">You</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-success/20 text-success">SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Sarah Miller</p>
                      <Badge variant="outline">Manager</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">sarah.m@example.com</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-accent/20 text-accent">TJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Tom Johnson</p>
                      <Badge variant="outline">Viewer</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">tom.j@example.com</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-6">Connected Services</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#009688]/20 flex items-center justify-center text-[#009688] font-bold">
                    TB
                  </div>
                  <div>
                    <p className="font-medium">ThingsBoard</p>
                    <p className="text-sm text-muted-foreground">IoT platform integration</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-success/10 text-success border-success/30">Connected</Badge>
                  <Button variant="ghost" size="sm">
                    Configure
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#5bc236]/20 flex items-center justify-center text-[#5bc236] font-bold">
                    B
                  </div>
                  <div>
                    <p className="font-medium">Blynk</p>
                    <p className="text-sm text-muted-foreground">IoT app platform</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Connect
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                    API
                  </div>
                  <div>
                    <p className="font-medium">REST API</p>
                    <p className="text-sm text-muted-foreground">Custom integrations</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Key className="h-4 w-4" />
                  Manage Keys
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4">Webhooks</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receive real-time updates when events occur in your system.
            </p>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Plus className="h-4 w-4" />
              Add Webhook
            </Button>
          </div>
        </TabsContent>

        {/* Billing */}
        <TabsContent value="billing" className="space-y-6">
          <div className="rounded-xl border border-primary/50 bg-primary/5 p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Professional Plan</h3>
                  <p className="text-sm text-muted-foreground">Your trial ends in 12 days</p>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent">
                Manage Plan
              </Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4">Current Usage</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Sensors</span>
                    <span>12 / 25</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <div className="h-2 w-[48%] rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Systems</span>
                    <span>3 / 5</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <div className="h-2 w-[60%] rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Retention</span>
                    <span>90 days</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <div className="h-2 w-full rounded-full bg-success" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4">Payment Method</h3>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 mb-4">
                <div className="h-10 w-14 rounded bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-xs font-bold">
                  VISA
                </div>
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/26</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                Update Payment Method
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Invoice History</h3>
              <Button variant="ghost" size="sm" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View All
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                <div>
                  <p className="font-medium">December 2025</p>
                  <p className="text-sm text-muted-foreground">Pro Plan</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">$49.00</span>
                  <Badge className="bg-success/10 text-success border-success/30">Paid</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                <div>
                  <p className="font-medium">November 2025</p>
                  <p className="text-sm text-muted-foreground">Pro Plan</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">$49.00</span>
                  <Badge className="bg-success/10 text-success border-success/30">Paid</Badge>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-6">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4">Active Sessions</h3>
            <p className="text-sm text-muted-foreground mb-4">Manage your active sessions across devices.</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div>
                  <p className="font-medium">Chrome on MacOS</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA • Current session</p>
                </div>
                <Badge className="bg-success/10 text-success border-success/30">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div>
                  <p className="font-medium">Safari on iPhone</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA • 2 hours ago</p>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive">
                  Revoke
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-destructive/50 bg-destructive/5 p-6">
            <h3 className="font-semibold text-destructive mb-2">Danger Zone</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Permanently delete your account and all associated data.
            </p>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
