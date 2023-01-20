//function to handle APPROVED, PENDING and REJECTED status
exports.statusColor = (status) => {
    let color = "";
    if(status.toLowerCase() == "approved"){
        color = "#3c7925";
    }else if(status.toLowerCase() == "rejected"){
        color = "#F21616";
    }else{
        color = "#F46005";
    }

    return color;
};