import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIPromptInputProps {
  onGenerate: (prompt: string) => void;
  placeholder?: string;
  loading?: boolean;
  buttonText?: string;
}

const AIPromptInput = ({
  onGenerate,
  placeholder = "Describe what you want to build...",
  loading = false,
  buttonText = "Generate Code",
}: AIPromptInputProps) => {
  const [prompt, setPrompt] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a description of what you want to build.",
        variant: "destructive",
      });
      return;
    }
    
    onGenerate(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={placeholder}
        className="min-h-[150px] resize-none"
        disabled={loading}
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={loading || !prompt.trim()}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              {buttonText}
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default AIPromptInput;