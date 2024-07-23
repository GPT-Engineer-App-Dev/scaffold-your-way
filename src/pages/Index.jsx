import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex-grow flex justify-center items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>My Application</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Enter your name" />
            <Input placeholder="Enter your email" type="email" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;