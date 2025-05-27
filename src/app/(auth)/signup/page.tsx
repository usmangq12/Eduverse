import { FormBuilder } from "./components/FormBuilder";

enum UserType {
  Teacher = "teacher",
  Student = "student",
}

type Type = `${UserType}`;

export default async function StartTeaching({
  searchParams,
}: {
  searchParams: Promise<{ type: Type }>;
}) {
  const { type } = await searchParams;
  const userType: UserType =
    type === UserType.Teacher ? UserType.Teacher : UserType.Student;

  return (
    <div className="flex justify-center items-center px-4 py-12 h-screen">
      <FormBuilder userType={userType} />
    </div>
  );
}
