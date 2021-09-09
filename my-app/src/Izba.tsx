interface Props {
    name: string;
    id?: number;
    
}

const Room: React.FC<Props> = ({name, id}) => {


    return (
    <div className="Room">
        I am the room
        {name}
        {id}
    </div>);
};

export default Room;
  