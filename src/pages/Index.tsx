import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Code, Sparkles, Zap, Layers, Code2, Braces, Laptop, MoveRight, Github, Terminal, Rocket } from "lucide-react";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">AI Crypto Code Killer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</a>
            <a href="#docs" className="text-sm font-medium hover:text-primary">Docs</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            <span>AI-Powered Development</span>
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Build Apps with <span className="text-primary">AI</span>, Not Code
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mb-10">
            AI Crypto Code Killer transforms your ideas into working applications using AI. 
            No coding experience required. Just describe what you want, and watch it come to life.
          </p>
          
          <div className="w-full max-w-3xl mb-10">
            <div className="flex flex-col md:flex-row gap-2">
              <Input 
                placeholder="Describe the app you want to build..." 
                className="h-12"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button className="h-12 px-8">
                <Zap className="mr-2 h-4 w-4" />
                Generate App
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
            <Button variant="outline" className="gap-2">
              <Terminal className="h-4 w-4" />
              Try Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Everything you need to build applications without writing a single line of code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sparkles className="h-6 w-6" />}
              title="AI-Powered Generation"
              description="Transform natural language prompts into functional code and applications with our advanced AI models."
            />
            <FeatureCard 
              icon={<Layers className="h-6 w-6" />}
              title="No-Code & Low-Code"
              description="Build applications with minimal or no coding experience required. Perfect for beginners and experts alike."
            />
            <FeatureCard 
              icon={<Braces className="h-6 w-6" />}
              title="Customizable Output"
              description="Modify and customize the generated code to fit your specific needs and requirements."
            />
            <FeatureCard 
              icon={<Laptop className="h-6 w-6" />}
              title="Real-time Collaboration"
              description="Work together with your team in real-time, making development a truly collaborative experience."
            />
            <FeatureCard 
              icon={<Code className="h-6 w-6" />}
              title="Multi-language Support"
              description="Generate code in multiple programming languages including JavaScript, Python, TypeScript, and more."
            />
            <FeatureCard 
              icon={<Rocket className="h-6 w-6" />}
              title="Instant Deployment"
              description="Deploy your applications instantly with our integrated hosting and deployment solutions."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Building applications has never been easier. Follow these simple steps to create your app.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard 
              number="1"
              title="Describe Your App"
              description="Use natural language to describe the app you want to build. Be as detailed as possible."
            />
            <StepCard 
              number="2"
              title="AI Generates Code"
              description="Our AI analyzes your description and generates all the necessary code for your application."
            />
            <StepCard 
              number="3"
              title="Customize & Deploy"
              description="Make any adjustments needed and deploy your application with a single click."
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Experience the power of AI-driven development with our interactive demo.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="prompt" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="prompt">Prompt</TabsTrigger>
                <TabsTrigger value="code">Generated Code</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="prompt" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <Textarea 
                    placeholder="Describe the app you want to build. For example: 'Create a to-do list app with the ability to add, complete, and delete tasks.'"
                    className="min-h-[200px]"
                  />
                  <Button className="w-full">
                    <Zap className="mr-2 h-4 w-4" />
                    Generate App
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="code" className="p-4 border rounded-md mt-2">
                <pre className="bg-muted p-4 rounded-md overflow-auto max-h-[400px] text-sm">
                  <code>{`// Example generated code
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, completed: false, id: Date.now() }]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Add a new task"
        />
        <button 
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Add
        </button>
      </div>
      
      <ul>
        {tasks.map(task => (
          <li 
            key={task.id} 
            className="flex items-center justify-between p-3 border-b"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="mr-2"
              />
              <span className={task.completed ? 'line-through' : ''}>
                {task.text}
              </span>
            </div>
            <button 
              onClick={() => deleteTask(task.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`}</code>
                </pre>
              </TabsContent>
              <TabsContent value="preview" className="border rounded-md mt-2 min-h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-muted-foreground mb-4">App preview will appear here after generation</p>
                  <Button variant="outline">Generate to see preview</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Choose the plan that works best for you and your team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Free"
              price="$0"
              description="Perfect for trying out the platform"
              features={[
                "5 app generations per month",
                "Basic customization",
                "Community support",
                "1 user"
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
            <PricingCard 
              title="Pro"
              price="$29"
              description="For individual developers and small teams"
              features={[
                "50 app generations per month",
                "Advanced customization",
                "Priority support",
                "5 team members",
                "Custom domains"
              ]}
              buttonText="Subscribe"
              buttonVariant="default"
              highlighted={true}
            />
            <PricingCard 
              title="Enterprise"
              price="Custom"
              description="For large teams and organizations"
              features={[
                "Unlimited app generations",
                "Full customization",
                "Dedicated support",
                "Unlimited team members",
                "Custom domains",
                "SLA guarantees",
                "On-premise option"
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
          <p className="max-w-[600px] mx-auto mb-8">
            Join thousands of developers who are already building with AI Crypto Code Killer.
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            Get Started for Free
            <MoveRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="font-bold">AI Crypto Code Killer</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of app development with AI.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Roadmap</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Crypto Code Killer. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <CardHeader>
        <div className="p-2 w-fit rounded-md bg-primary/10 text-primary mb-3">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

// Step Card Component
const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({ title, price, description, features, buttonText, buttonVariant, highlighted = false }) => {
  return (
    <Card className={`flex flex-col ${highlighted ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-2 text-primary"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={buttonVariant}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Index;