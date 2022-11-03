import '../styles/Item.css'

interface IItem {
    id: number
    title: string
}

export default function Item(props: IItem) {
    return(
        <div
            draggable={true}
            className="item"
        >
            {props.title}
        </div>
    )
}