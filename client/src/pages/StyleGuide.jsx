import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from "@/components/ui/dialog"

// page to check our components match the design spec - open /style-guide
export default function StyleGuide() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 p-8">
      <h1>Style guide</h1>

      <section className="space-y-3">
        <h2>Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Save event</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Cancel booking</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2>Status badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="ready">Ready</Badge>
          <Badge variant="warning">Check halal</Badge>
          <Badge variant="danger">Food short</Badge>
          <Badge variant="danger">Nut allergy</Badge>
        </div>
      </section>

      <section className="max-w-md space-y-3">
        <h2>Form</h2>
        <div className="space-y-2">
          <Label htmlFor="name">First name or nickname</Label>
          <Input id="name" placeholder="Sarah" />
        </div>
        <div className="space-y-2">
          <Label>Main meal</Label>
          <ToggleGroup defaultValue={["standard"]}>
            <ToggleGroupItem value="standard">Standard</ToggleGroupItem>
            <ToggleGroupItem value="vegetarian">Vegetarian</ToggleGroupItem>
            <ToggleGroupItem value="vegan">Vegan</ToggleGroupItem>
            <ToggleGroupItem value="halal">Halal</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Label className="items-start gap-2 font-normal">
          <Checkbox defaultChecked />
          I'm happy for my allergies and support needs to be used to prepare my meal.
        </Label>
      </section>

      <section className="space-y-3">
        <h2>Card</h2>
        <Card className="max-w-xs">
          <CardHeader>
            <CardTitle>Predicted attendance</CardTitle>
            <CardDescription>Likely 70 to 95</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-(length:--text-stat) font-bold">82</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h2>Table</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Needs</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Dave M.</TableCell>
              <TableCell>Vegan</TableCell>
              <TableCell><Button size="sm" variant="outline">Check in</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sarah</TableCell>
              <TableCell><Badge variant="danger">Nut allergy</Badge></TableCell>
              <TableCell><Button size="sm" variant="outline">View needs</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section className="space-y-3">
        <h2>Pop-up</h2>
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>Open pop-up</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cancel a booking</DialogTitle>
              <DialogDescription>We'll free up your place so the food isn't wasted.</DialogDescription>
            </DialogHeader>
            <Input defaultValue="2P1" />
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>Keep my booking</DialogClose>
              <Button variant="destructive">Cancel booking</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  )
}
