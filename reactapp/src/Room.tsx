interface Props {
  name: string;
  id?: number;
}

const Room: React.FC<Props> = ({name, id}) => {


    return (
      <div className="Room">
        Room
        {name}
      </div>);
    
  };

  export default Room;