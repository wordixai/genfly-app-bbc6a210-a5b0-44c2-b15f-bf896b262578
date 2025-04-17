import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, ExternalLink, Code } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastUpdated: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
  onCode?: (id: string) => void;
}

const ProjectCard = ({
  id,
  title,
  description,
  tags,
  lastUpdated,
  onEdit,
  onDelete,
  onView,
  onCode,
}: ProjectCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span className="truncate">{title}</span>
        </CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
        <p className="text-xs text-muted-foreground mt-4">
          Last updated: {formatDate(lastUpdated)}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex gap-2">
          {onEdit && (
            <Button variant="ghost" size="sm" onClick={() => onEdit(id)}>
              <Edit className="h-4 w-4" />
            </Button>
          )}
          {onDelete && (
            <Button variant="ghost" size="sm" onClick={() => onDelete(id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          {onCode && (
            <Button variant="outline" size="sm" onClick={() => onCode(id)}>
              <Code className="h-4 w-4 mr-1" />
              Code
            </Button>
          )}
          {onView && (
            <Button size="sm" onClick={() => onView(id)}>
              <ExternalLink className="h-4 w-4 mr-1" />
              View
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;