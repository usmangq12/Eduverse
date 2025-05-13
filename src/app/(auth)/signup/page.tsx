import { FormBuilder } from "./components/FormBuilder";

export default async function StartTeaching({
  searchParams,
}: {
  searchParams: Promise<{ [type: string]: string | undefined }>;
}) {
  const { type } = await searchParams;

  return (
    <div className="flex justify-center items-center px-4 py-12 h-screen">
      <FormBuilder userType={type ? "teacher" : "student"} />
    </div>
  );
}
