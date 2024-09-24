import React from "react";
function NavBar(){
    return(
        
        <>
            <main>
                <div className="w-full h-5 flex justify-between px-10 ">
                    <div className="flex gap-5">
                        <div className="flex gap-1"><i className="ri-time-fill text-[#ff9b24]"></i> 8.00am-4.00pm</div>
                        <div className="flex gap-1"><i className="ri-mail-fill text-[#ff9b24]"></i> support@kindelo.com</div>
                    </div>
                    <div className="flex gap-1 "><i className="ri-map-pin-2-fill text-[#ff9b24]"></i> 14/A,Kilix Home Tower, NYC</div>
                </div>
                <div>
                    <div>
                        <div><i className="ri-book-open-line text-[#ff9b24]"></i></div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </>
    )
}
export default NavBar