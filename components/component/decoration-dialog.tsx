'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Decoration } from "@/utils/types"
import { SVGProps, useEffect, useState } from "react"
import { Textarea } from "../ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { CreateDecoration, editDecoration, getFile } from "@/app/actions"
import { toast } from "sonner"
import { useFilePicker } from 'use-file-picker';
import { uploadFile } from "@/lib/storage"

interface EditProps{
    decoration: Decoration
}
interface CreateProps{
    type: string
}
export function DecorationEditDialog({decoration}: EditProps) {
    const [isImageLoading, setLoadingImage ] = useState(false)
    
    const { openFilePicker, filesContent, loading } = useFilePicker({
        accept: 'image/*',
        
        onFilesSelected:async ({ plainFiles, filesContent, errors }) => {
          setLoadingImage(true)

            // this callback is always called, even if there are errors
            console.log('onFilesSelected', plainFiles, filesContent, errors);
         if(plainFiles.length > 0){   
     const newImages =   await   handleImages(plainFiles)
            setImages([...images!,  ...newImages])
          }else toast.error('please select an image')
            setLoadingImage(false)
          },
      });
    const handleAddImage =async  ()=> {
       openFilePicker()
      

    }
    const handleImages =  async(images:any )=> {
      var links: string[] = []
      for(var ima in images){
        const path = await uploadFile(ima, 'decorations/')
        const image = await getFile(path)
        links.push(image)
      }
      return links
    };
    const [name, setName] = useState(decoration.name)
    const [description, setDescription] = useState(decoration.description)
    const [images, setImages] = useState(decoration.images)
    
    const [isLoading, setLoading] = useState(false)
    const handleSubmit = async ()=> {
        const data: Decoration = {
            ...decoration,
            name, 
            description,
            images, 
        }

        setLoading(true)
        const {status, message,error} = await editDecoration(data!)
        if(error) {
            console.error(error)
            toast.error(message)
        }
        setLoading(false)
        toast.success(message)
    }
    const handleDeleteImage = (image: string) => {
        const newImages = images?.filter(i => image !== i)
        setImages(newImages!)
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><FilePenIcon className="w-4 h-4" />
        <span className="sr-only">Edit</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Decoration</DialogTitle>
          <DialogDescription>
            Make changes to your Decoration here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={e => setName(e.target.value )} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" value={description} onChange={e => setDescription( e.target.value )} className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="images" className="text-right">
              Images 
            </Label>
                {<div className="flex flex-wrap  space-x-1 space-y-1">
          {images!.map(image => (<div onClick={ e => handleDeleteImage(image)} className="max-h-[80px] max-w-[80px] relative block overflow-hidden rounded-lg shadow-lg group" >
            <Image
              src= {image ?? "/placeholder.svg"}
              alt="Decoration Image"
              width={40}
              height={40}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <DeleteIcon className="w-8 h-8 text-white" />
            </div>
          </div>))}
          <div  onClick={isImageLoading ?()=> {}: handleAddImage} className="w-[40px] h-[80px] bg-slate-400 rounded flex items-center hover:ease-out duration-300 hover:transition-opacity opacity-100 hover:opacity-50 cursor-pointer justify-center"><AddIcon /></div>
          
         
        </div> }
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" disabled={isLoading|| isImageLoading}>{isLoading ? 'Applying the updates' : isImageLoading ? 'Adding Image...':"Submit"}</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function DecorationCreationDialog({type}: CreateProps) {
    const [isImageLoading, setLoadingImage ] = useState(false)
    
    const { openFilePicker, filesContent, loading } = useFilePicker({
        accept: 'image/*',
        onFilesSelected:async ({ plainFiles, filesContent, errors }) => {
            // this callback is always called, even if there are errors
            console.log('onFilesSelected', plainFiles, filesContent, errors);
 
            const path = await uploadFile(plainFiles[0], 'decorations/')
            const image = await getFile(path)
            setImages([...images!,  image])
            setLoadingImage(false)
          },
      });
    const handleAddImage =async  ()=> {
        setLoadingImage(true)
       openFilePicker()
      

    }
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState<string[]>([])
    
    const [isLoading, setLoading] = useState(false)
    const handleSubmit = async ()=> {
        const data = {
        
            name, 
            description,
            images, 
        }

        setLoading(true)
        const {status, message,error} = await CreateDecoration(name, description, images, type)
        if(error) {
            console.error(error)
            toast.error(message)
        }
        setLoading(false)
        toast.success(message)
    }
    const handleDeleteImage = (image: string) => {
        const newImages = images?.filter(i => image !== i)
        setImages(newImages!)
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  size="sm">Add Decoration</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Decoration</DialogTitle>
          <DialogDescription>
            Make changes to your Decoration here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={e => setName(e.target.value )} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" value={description} onChange={e => setDescription( e.target.value )} className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="images" className="text-right">
              Images 
            </Label>
                {<div className="flex flex-wrap  space-x-1 space-y-1">
          {images!.map(image => (<div onClick={ e => handleDeleteImage(image)} className="max-h-[80px] max-w-[80px] relative block overflow-hidden rounded-lg shadow-lg group" >
            <Image
              src= {image ?? "/placeholder.svg"}
              alt="Decoration Image"
              width={40}
              height={40}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <DeleteIcon className="w-8 h-8 text-white" />
            </div>
          </div>))}
          <div  onClick={isImageLoading ?()=> {}: handleAddImage} className="w-[40px] h-[80px] bg-slate-400 rounded flex items-center hover:ease-out duration-300 hover:transition-opacity opacity-100 hover:opacity-50 cursor-pointer justify-center"><AddIcon /></div>
          
         
        </div> }
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" disabled={isLoading|| isImageLoading}>{isLoading ? 'Applying the updates' : isImageLoading ? 'Adding Image...':"Submit"}</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function DeleteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18M9 21v-9a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v9M16 10v6a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-6" />
        <line x1="16" y1="10" x2="8" y2="10" />
      </svg>
    );
  }
  function AddIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    );
  }
  

  function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}
