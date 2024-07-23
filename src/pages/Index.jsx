import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  const [name, setName] = React.useState("");
  const [favColor, setFavColor] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Radical submission:", { name, favColor });
    // Add your submit logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center p-4">
      <Card className="w-full max-w-md bg-black text-white border-4 border-yellow-400">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-neon-green animate-pulse">
            Totally 80s App!
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="block text-yellow-400">Your Rad Name:</label>
              <Input 
                placeholder="Max Headroom" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white text-black border-2 border-pink-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-yellow-400">Fave Neon Color:</label>
              <Input 
                placeholder="Hot Pink" 
                value={favColor}
                onChange={(e) => setFavColor(e.target.value)}
                className="bg-white text-black border-2 border-blue-500"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold text-lg"
            >
              Blast Off!
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Index;