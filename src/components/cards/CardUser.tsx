import { Avatar } from "@mui/material";

export default function UserCard({ name,url_image }: { name:string,url_image:string }) {
    return (
      <div className='flex items-center gap-2 justify-between'>
        <div className='flex items-center gap-2'>
          <Avatar alt="Remy Sharp" src={url_image} />
          <div className='flex flex-col'>
            <p>{name}</p>
          </div>
        </div>
      </div>
    )
  }