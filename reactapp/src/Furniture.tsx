interface Chairs {
    nameChair: string;
    id?: number;
}

const Furniture: React.FC<Chairs> = ({nameChair, id}) => {

    return(
        <div className = "Furniture">
            Chair
            {nameChair}
        </div>
    )
}

export default Furniture;