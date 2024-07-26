
export default function HeaderList() {
    return (
        <>
            <div className="flex flex-row items-center bg-[#666] rounded-md p-1">
                <div className="w-1/12">
                    Grade
                </div>
                <div className="w-2/12">
                    Name
                </div>
                <div className="w-6/12  text-center">
                    Total Vulnerabilities
                </div>
                <div className="w-3/12  text-center">
                    Last Seen
                </div>
            </div>
        </>
    )
}
