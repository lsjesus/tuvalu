import CardMember from "./CardMember";
import "./style.css";

export default function Members() {
    const members = [
        {
            img: "",
            name: "Alexandro Rocha",
            number: "N° 01 - PicPay",
        },
        {
            img: "",
            name: "Cayo Amaral",
            number: "N° 03 - PicPay",
        },
        {
            img: "",
            name: "Felipe Molinari",
            number: "N° 17 - PicPay",
        },
        {
            img: "",
            name: "Guilherme Molina",
            number: "N° 09 - Banco Original",
        },
        {
            img: "",
            name: "João Fernando",
            number: "N° 09 - PicPay",
        },
        {
            img: "",
            name: "Lucas Jesus",
            number: "N° 12 - PicPay",
        },
        {
            img: "",
            name: "Matheus Germano",
            number: "N° 14 - PicPay",
        },
        {
            img: "",
            name: "Murilo Harimoto",
            number: "N° 18 - PicPay",
        },
    ];

    return (
        <div className = "pageContainer">
            <h1 className = "membersTitle"> Members </h1>
            <div className="memberContainer">
                {members.map((member) => (
                    <CardMember
                        img={member.img}
                        name={member.name}
                        number={member.number}
                    />
                ))}
            </div>
        </div>
    );
}
