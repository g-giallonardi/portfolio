export default function Hello({ params }){
    return (
        <div className={`bg-red-500`}>
            {params.slug}
        </div>
    )
}