import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  return (
    <Card className="w-full">
      <CardHeader className="p-4">
        <CardTitle className="flex-row items-center justify-between w-full flex">
          <span>{snippet.Title}</span>
          <span>#{snippet.ID}</span>
        </CardTitle>
      </CardHeader>
      <CardContent
        className="p-4 border-y text-muted-foreground"
        dangerouslySetInnerHTML={{
          __html: snippet.Content.replace(/\n/g, '<br>'),
        }}
      >
        {/* {snippet.Content} */}
      </CardContent>
      <CardFooter className="p-4 text-sm flex items-center justify-between">
        <span>Created: {snippet.Created.toLocaleString()}</span>
        <span>Expires: {snippet.Expires.toLocaleString()}</span>
      </CardFooter>
    </Card>
  );
};

export default SnippetCard;
