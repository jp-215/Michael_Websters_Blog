import { format, isValid } from "date-fns";

// Renders nothing when the CMS date is missing or invalid, instead of crashing the build.
export default function DateComponent({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  if (!dateString || !isValid(date)) return null;

  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
