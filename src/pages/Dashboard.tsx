import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Code2, Settings, User, Zap, Folder, LayoutGrid } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useToast } from "@/hooks/use-toast";

// Mock data for projects
const mockProjects = [
  {
    id: "1",
    title: "E-commerce Website",
    description: "A fully functional e-commerce website with product listings, cart, and checkout functionality.",
    tags: ["React", "Node.js", "MongoDB"],
    lastUpdated: "2023-06-15T12:00:00Z",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality, task prioritization, and team collaboration features.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    lastUpdated: "2023-07-22T15:30:00Z",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
    tags: ["JavaScript", "API", "CSS"],
    lastUpdated: "2023-08-05T09:45:00Z",
  },
  {
    id: "4",
    title: "Personal Portfolio",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    tags: ["HTML", "CSS", "JavaScript"],
    lastUpdated: "2023-09-10T14:20:00Z",
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "A blog platform with content management system, user authentication, and commenting functionality.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    lastUpdated: "2023-10-18T11:15:00Z",
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredProjects = mockProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleEdit = (id: string) => {
    toast({
      title: "Edit project",
      description: `Editing project with ID: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Delete project",
      description: `Deleting project with ID: ${id}`,
      variant: "destructive",
    });
  };

  const handleView = (id: string) => {
    toast({
      title: "View project",
      description: `Viewing project with ID: ${id}`,
    });
  };

  const handleCode = (id: string) => {
    toast({
      title: "View code",
      description: `Viewing code for project with ID: ${id}`,
    });
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-card">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">AI Crypto Code Killer</span>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Folder className="mr-2 h-4 w-4" />
                Projects
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Zap className="mr-2 h-4 w-4" />
                AI Generator
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="mb-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Projects
                  </CardTitle>
                  <Folder className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockProjects.length}</div>
                  <p className="text-xs text-muted-foreground">
                    +2 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    AI Generations
                  </CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    +12 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Deployments
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">16</div>
                  <p className="text-xs text-muted-foreground">
                    +4 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    API Credits
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">750</div>
                  <p className="text-xs text-muted-foreground">
                    250 used this month
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Start a new project or continue where you left off
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <Zap className="h-8 w-8" />
                  <span>New AI Project</span>
                </Button>
                <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-8 w-8"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                  <span>Templates</span>
                </Button>
                <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-8 w-8"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Invite Team</span>
                </Button>
                <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-8 w-8"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  <span>Settings</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Your Projects</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    className="pl-8 w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="ai">AI Generated</TabsTrigger>
                <TabsTrigger value="deployed">Deployed</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      lastUpdated={project.lastUpdated}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      onView={handleView}
                      onCode={handleCode}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="recent" className="mt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects
                    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
                    .slice(0, 3)
                    .map((project) => (
                      <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        lastUpdated={project.lastUpdated}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onView={handleView}
                        onCode={handleCode}
                      />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="ai" className="mt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects
                    .filter((_, index) => index % 2 === 0) // Just for demo purposes
                    .map((project) => (
                      <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        tags={[...project.tags, "AI Generated"]}
                        lastUpdated={project.lastUpdated}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onView={handleView}
                        onCode={handleCode}
                      />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="deployed" className="mt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects
                    .filter((_, index) => index % 3 === 0) // Just for demo purposes
                    .map((project) => (
                      <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        tags={[...project.tags, "Deployed"]}
                        lastUpdated={project.lastUpdated}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onView={handleView}
                        onCode={handleCode}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;