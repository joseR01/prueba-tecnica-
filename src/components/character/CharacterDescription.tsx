interface Props {
  name: string
  value: string
}

const CharacterDescription = ({ name, value }: Props) => {
  return (
    <p><span className="font-bold">{name}:</span>{" "}{value}</p>
  )
}

export default CharacterDescription