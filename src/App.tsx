import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Rocket, Zap, Palette, Code2, Boxes } from "lucide-react";
import profileImage from "@/assets/pp.jpg";

const features = [
  {
    icon: <Zap className="h-5 w-5 text-yellow-400" />,
    title: "Lightning Fast",
    desc: "Built with Vite for optimal performance",
    badge: {
      text: "Speed",
      variant: "default" as const,
      badgeColor: "text-yellow-400",
    },
  },
  {
    icon: <Code2 className="h-5 w-5 text-blue-400" />,
    title: "Modern Stack",
    desc: "React, TypeScript, and TailwindCSS",
    badge: {
      text: "Tech",
      variant: "secondary" as const,
      badgeColor: "",
    },
  },
  {
    icon: <Palette className="h-5 w-5 text-purple-400" />,
    title: "Beautiful UI",
    desc: "Powered by shadcn/ui components",
    badge: {
      text: "Design",
      variant: "outline" as const,
      badgeColor: "text-purple-400",
    },
  },
  {
    icon: <Rocket className="h-5 w-5 text-pink-400" />,
    title: "Production Ready",
    desc: "Optimized for deployment",
    badge: {
      text: "Deploy",
      variant: "destructive" as const,
      badgeColor: "text-pink-100",
    },
  },
  {
    icon: <Boxes className="h-5 w-5 text-orange-400" />,
    title: "Modular Design",
    desc: "Component-based architecture",
    badge: {
      text: "Structure",
      variant: "outline" as const,
      badgeColor: "text-orange-400",
    },
  },
] as const;

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold text-white">
              Bex Boilerplate
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search components..."
              className="w-64 border-white/10 bg-white/5 text-white placeholder:text-white/50"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 rounded-full my-10 p-0 cursor-pointer"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={profileImage}
                      className="object-cover object-center w-full h-full"
                    />

                    <AvatarFallback>BeKi</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="backdrop-blur-lg bg-purple-900/5 text-white mt-3"
              >
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-16 text-center">
            <div className="mb-6 flex justify-center gap-2">
              <Badge
                variant="outline"
                className="border-purple-500/20 bg-purple-500/10 text-purple-400"
              >
                v1.0.0
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white">
                React 19
              </Badge>
            </div>
            <h1 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
              Bex React Boilerplate
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Start your next project with this basic template featuring Vite,
              TypeScript, TailwindCSS, and some shadcn/ui components.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/20 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 cursor-pointer"
              >
                Documentation
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group border-white/5 bg-white/5 backdrop-blur-sm transition-colors hover:border-purple-500/20 hover:bg-white/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white/10 p-3 ring-1 ring-white/20 transition-colors group-hover:bg-white/20">
                      {feature.icon}
                    </div>
                    <CardTitle className="flex items-center gap-2 text-white">
                      {feature.title}
                      <Badge
                        variant={feature.badge.variant}
                        className={`ml-2 ${feature.badge.badgeColor}`}
                      >
                        {feature.badge.text}
                      </Badge>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/40">
          Built with ⚡️ by Beki. Open source and free forever.
        </div>
      </footer>
    </div>
  );
}

export default App;
