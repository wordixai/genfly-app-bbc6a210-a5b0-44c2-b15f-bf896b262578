import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Save, Sparkles, Code2, Laptop, Server, Database } from "lucide-react";
import AIPromptInput from "@/components/AIPromptInput";
import CodeEditor from "@/components/CodeEditor";
import { useToast } from "@/hooks/use-toast";

const Generator = () => {
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [projectType, setProjectType] = useState("web");
  const [language, setLanguage] = useState("javascript");
  const { toast } = useToast();

  const handleGenerate = (prompt: string) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const code = generateMockCode(prompt, projectType, language);
      setGeneratedCode(code);
      setGenerated(true);
      setLoading(false);
      
      toast({
        title: "Code generated successfully",
        description: "Your code has been generated based on your prompt.",
      });
    }, 2000);
  };

  const handleSaveProject = () => {
    toast({
      title: "Project saved",
      description: "Your project has been saved to your dashboard.",
    });
  };

  const handleDownloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedCode], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `project.${language === "javascript" ? "js" : language}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="/dashboard">
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </Button>
              <h1 className="text-2xl font-bold">AI Code Generator</h1>
            </div>
            <div className="flex items-center gap-2">
              {generated && (
                <>
                  <Button variant="outline" onClick={handleDownloadCode}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button onClick={handleSaveProject}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Project
                  </Button>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Input */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Generate Code with AI</CardTitle>
                  <CardDescription>
                    Describe what you want to build and our AI will generate the code for you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Type</label>
                      <Select value={projectType} onValueChange={setProjectType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">
                            <div className="flex items-center gap-2">
                              <Laptop className="h-4 w-4" />
                              <span>Web Application</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="api">
                            <div className="flex items-center gap-2">
                              <Server className="h-4 w-4" />
                              <span>API / Backend</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="database">
                            <div className="flex items-center gap-2">
                              <Database className="h-4 w-4" />
                              <span>Database Schema</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="component">
                            <div className="flex items-center gap-2">
                              <Code2 className="h-4 w-4" />
                              <span>UI Component</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Language</label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="javascript">JavaScript</SelectItem>
                          <SelectItem value="typescript">TypeScript</SelectItem>
                          <SelectItem value="python">Python</SelectItem>
                          <SelectItem value="java">Java</SelectItem>
                          <SelectItem value="csharp">C#</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Prompt</label>
                      <AIPromptInput
                        onGenerate={handleGenerate}
                        loading={loading}
                        placeholder="Describe what you want to build in detail. For example: 'Create a responsive navigation menu with dropdown support for mobile devices.'"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Prompt Tips</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-start gap-2">
                          <Sparkles className="h-4 w-4 mt-0.5 text-primary" />
                          <span>Be specific about functionality and features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="h-4 w-4 mt-0.5 text-primary" />
                          <span>Mention design preferences or frameworks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="h-4 w-4 mt-0.5 text-primary" />
                          <span>Include any specific requirements or constraints</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Output */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Generated Code</CardTitle>
                  <CardDescription>
                    {generated
                      ? "Your code has been generated. You can edit it directly or download it."
                      : "Your generated code will appear here."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {generated ? (
                    <Tabs defaultValue="code">
                      <TabsList>
                        <TabsTrigger value="code">Code</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                      </TabsList>
                      <TabsContent value="code" className="mt-4">
                        <CodeEditor
                          initialCode={generatedCode}
                          language={language}
                        />
                      </TabsContent>
                      <TabsContent value="preview" className="mt-4">
                        <div className="border rounded-md min-h-[500px] p-4">
                          <iframe
                            title="Preview"
                            srcDoc={`
                              <!DOCTYPE html>
                              <html>
                              <head>
                                <style>
                                  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; }
                                </style>
                              </head>
                              <body>
                                <div id="app"></div>
                                <script type="module">
                                  try {
                                    ${generatedCode}
                                    // For React-like code, attempt to render to #app
                                    if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
                                      ReactDOM.render(React.createElement(App), document.getElementById('app'));
                                    }
                                  } catch (error) {
                                    document.body.innerHTML = '<div style="color: red; font-family: monospace; white-space: pre-wrap;">' + error + '</div>';
                                    console.error(error);
                                  }
                                </script>
                              </body>
                              </html>
                            `}
                            sandbox="allow-scripts"
                            className="w-full h-full min-h-[500px] border-0"
                          />
                        </div>
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <div className="border rounded-md min-h-[500px] flex items-center justify-center">
                      <div className="text-center p-8">
                        <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No Code Generated Yet</h3>
                        <p className="text-muted-foreground max-w-md">
                          Enter a prompt on the left and click "Generate Code" to see the AI-generated code here.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Helper function to generate mock code based on prompt
const generateMockCode = (prompt: string, projectType: string, language: string) => {
  if (language === "javascript" || language === "typescript") {
    if (projectType === "web") {
      return `// Generated code based on prompt: "${prompt}"
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Application</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(item => (
          <div key={item.id} className="border rounded-md p-4">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;`;
    } else if (projectType === "api") {
      return `// Generated code based on prompt: "${prompt}"
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
let items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' }
];

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  
  res.json(item);
});

app.post('/api/items', (req, res) => {
  const { name, description } = req.body;
  
  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }
  
  const newItem = {
    id: items.length + 1,
    name,
    description
  };
  
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  
  const itemIndex = items.findIndex(item => item.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }
  
  items[itemIndex] = {
    ...items[itemIndex],
    name: name || items[itemIndex].name,
    description: description || items[itemIndex].description
  };
  
  res.json(items[itemIndex]);
});

app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(item => item.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }
  
  const deletedItem = items[itemIndex];
  items = items.filter(item => item.id !== id);
  
  res.json(deletedItem);
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`;
    } else if (projectType === "component") {
      return `// Generated code based on prompt: "${prompt}"
import React, { useState } from 'react';

const Dropdown = ({ label, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {selectedOption ? selectedOption.label : label}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

// Example usage:
// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ];
// <Dropdown label="Select an option" options={options} onChange={(option) => console.log(option)} />`;
    }
  } else if (language === "python") {
    if (projectType === "api") {
      return `# Generated code based on prompt: "${prompt}"
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data
items = [
    {"id": 1, "name": "Item 1", "description": "Description for Item 1"},
    {"id": 2, "name": "Item 2", "description": "Description for Item 2"},
    {"id": 3, "name": "Item 3", "description": "Description for Item 3"}
]

@app.route('/api/items', methods=['GET'])
def get_items():
    return jsonify(items)

@app.route('/api/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    item = next((item for item in items if item["id"] == item_id), None)
    if item is None:
        return jsonify({"message": "Item not found"}), 404
    return jsonify(item)

@app.route('/api/items', methods=['POST'])
def create_item():
    data = request.get_json()
    
    if not data or 'name' not in data or 'description' not in data:
        return jsonify({"message": "Name and description are required"}), 400
    
    new_item = {
        "id": len(items) + 1,
        "name": data["name"],
        "description": data["description"]
    }
    
    items.append(new_item)
    return jsonify(new_item), 201

@app.route('/api/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    item = next((item for item in items if item["id"] == item_id), None)
    if item is None:
        return jsonify({"message": "Item not found"}), 404
    
    data = request.get_json()
    
    if 'name' in data:
        item["name"] = data["name"]
    if 'description' in data:
        item["description"] = data["description"]
    
    return jsonify(item)

@app.route('/api/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    global items
    item = next((item for item in items if item["id"] == item_id), None)
    if item is None:
        return jsonify({"message": "Item not found"}), 404
    
    items = [item for item in items if item["id"] != item_id]
    return jsonify(item)

if __name__ == '__main__':
    app.run(debug=True)`;
    } else if (projectType === "database") {
      return `# Generated code based on prompt: "${prompt}"
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime

# Create the SQLAlchemy engine
engine = create_engine('sqlite:///database.db', echo=True)
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(128), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)
    
    # Relationships
    posts = relationship('Post', back_populates='author')
    comments = relationship('Comment', back_populates='author')
    
    def __repr__(self):
        return f"<User(username='{self.username}', email='{self.email}')>"

class Post(Base):
    __tablename__ = 'posts'
    
    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    
    # Relationships
    author = relationship('User', back_populates='posts')
    comments = relationship('Comment', back_populates='post', cascade='all, delete-orphan')
    
    def __repr__(self):
        return f"<Post(title='{self.title}', author_id={self.user_id})>"

class Comment(Base):
    __tablename__ = 'comments'
    
    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey('posts.id'), nullable=False)
    
    # Relationships
    author = relationship('User', back_populates='comments')
    post = relationship('Post', back_populates='comments')
    
    def __repr__(self):
        return f"<Comment(author_id={self.user_id}, post_id={self.post_id})>"

# Create all tables
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Example usage:
# Create a user
# new_user = User(username='john_doe', email='john@example.com', password_hash='hashed_password')
# session.add(new_user)
# session.commit()

# Create a post
# new_post = Post(title='My First Post', content='This is the content of my first post.', user_id=1)
# session.add(new_post)
# session.commit()

# Create a comment
# new_comment = Comment(content='Great post!', user_id=1, post_id=1)
# session.add(new_comment)
# session.commit()

# Query examples
# users = session.query(User).all()
# posts = session.query(Post).filter_by(user_id=1).all()
# comments = session.query(Comment).filter_by(post_id=1).all()`;
    }
  }
  
  // Default fallback code
  return `// Generated code based on prompt: "${prompt}"
// This is a placeholder for the generated code.
// In a real implementation, this would be replaced with actual AI-generated code.

console.log("Hello, world!");
console.log("Your prompt was: ${prompt}");
console.log("Project type: ${projectType}");
console.log("Language: ${language}");

// Example function
function exampleFunction() {
  return "This is an example function generated based on your prompt.";
}

// Example class
class ExampleClass {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return \`Hello, \${this.name}!\`;
  }
}

// Export
export { exampleFunction, ExampleClass };`;
};

export default Generator;