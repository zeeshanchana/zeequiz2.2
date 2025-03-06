 
import Component from "./Component";

export default async function Quiz({ params }) {
 
  const { classId, subject, chapter } = await params;

  

  return (
   <Component classId={classId} subject={subject} chapter={chapter}/>
  );
}

