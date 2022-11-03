interface IItem {
    id: number
    title: string
}

export default function Item(props: IItem) {
    return(
        <div>
            {props.title}
        </div>
    )
}