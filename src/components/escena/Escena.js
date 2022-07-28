import { Border } from "../../styled";

export default function Escena({ selected, texto, posicion }) {
  return (
    <Border selected={selected}>
      <p>
        {texto} {posicion}
      </p>
    </Border>
  );
}
