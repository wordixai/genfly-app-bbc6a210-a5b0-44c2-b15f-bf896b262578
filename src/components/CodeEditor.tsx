import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Play, Download, Copy, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  readOnly?: boolean;
  onSave?: (code: string) => void;
}

const CodeEditor = ({
  initialCode = "",
  language = "javascript",
  readOnly = false,
  onSave,
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [activeTab, setActiveTab] = useState<string>("editor");
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `code.${language}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(code);
      toast({
        title: "Code saved",
        description: "Your code has been saved successfully.",
      });
    }
  };

  const handleRun = () => {
    setActiveTab("preview");
    toast({
      title: "Running code",
      description: "Your code is now running in the preview tab.",
    });
  };

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-muted p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {language.charAt(0).toUpperCase() + language.slice(1)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            title="Copy code"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownload}
            title="Download code"
          >
            <Download className="h-4 w-4" />
          </Button>
          {onSave && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSave}
              title="Save code"
            >
              <Save className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRun}
            title="Run code"
          >
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start rounded-none border-b bg-muted">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="editor" className="p-0 m-0">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[300px] rounded-none border-0 resize-none focus-visible:ring-0"
            placeholder="Write or paste your code here..."
            readOnly={readOnly}
          />
        </TabsContent>
        <TabsContent value="preview" className="p-0 m-0">
          <div className="min-h-[300px] p-4">
            <iframe
              title="Code Preview"
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
                      ${code}
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
              className="w-full h-full min-h-[300px] border-0"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodeEditor;