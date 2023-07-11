import Image from "next/image";
import { dataType } from "src/pages";

export default function GridBox({
  role,
  description,
  name,
  icon,
  priority,
}: dataType) {
  return (
    <section>
      <Image alt={role} src={icon} width={200} height={200} priority={true} />
      <h1>
        {priority} 등장인물: {role} ({name})
      </h1>
      <p>{description}</p>
    </section>
  );
}
