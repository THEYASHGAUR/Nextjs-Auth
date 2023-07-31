export default function UserProfile({ params }: any) {
    return (
        <div>
            <h1 className="text-4xl">
                this iss user  prfoile apge of_
                <span>{params.id}</span>
            </h1>
        </div>
    )
}