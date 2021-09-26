

export default function Anchor({children}) {
    return (
        <h2 id = {children.toLowerCase().trim().replace(/ /g, "-")}>
            {children}
        </h2>
    )
}
