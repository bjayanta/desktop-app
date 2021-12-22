import React from 'react'

export default function PrintHead() { 
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();


    return (

        <>
            {/* print header */}
            <div className="print-show print-header">
                <div className="d-flex">
                    <div>
                        <h4>ShohozSales</h4>
                        <h6>5B Green House, 27/2 Ram Babu Road, Mymensingh</h6>
                        <p className="text-small"><strong>Phone:</strong>+880 1786 494650, +880 1786 494650</p>
                    </div>

                    <div className="ms-auto">
                        <p>5 December, 2020</p>
                        <p>{ datetime }</p>
                    </div>
                </div>
            </div>
        </>
    )
}
