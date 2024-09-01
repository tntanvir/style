import { IconButton } from '@material-tailwind/react';

const Pagination = ({ parPage, total, pagination, crunnt }) => {
    const num = [];
    for (let i = 1; i <= Math.ceil(total / parPage); i++) {
        num.push(i);
    }
    return (
        <ul className='flex md:gap-5 gap-1 overflow-auto py-2 '>
            {
                num.map((e) => (
                    <li key={e} onClick={() => pagination(e)}>
                        <IconButton className={`${e === crunnt ? "" : "bg-transparent text-black"}`}>{e}</IconButton>
                    </li>

                ))
            }
        </ul>
    )
}

export default Pagination