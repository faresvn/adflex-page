import { blogEndpoints, getEndpoint } from '@/lib/endpoints'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'

import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { toast } from 'react-toastify'

interface IDeleteBlog {
  disable: boolean
  id?: string
  callList: () => void
}

export const DeleteBlog = ({ disable, id, callList }: IDeleteBlog) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const deleteBlog = useApiCall<string, string>({
    callApi: () => axios.delete(`${getEndpoint(blogEndpoints, 'delete')}?ids=${id}`),
    handleError(status, message) {
      toast.error(message)
    },
    handleSuccess(message) {
      toast.success(message)
      onOpenChange()
      callList()
    },
  })

  const handleDelete = () => {
    deleteBlog.setLetCall(true)
  }

  return (
    <>
      <Button isDisabled={disable} onPress={onOpen} color="danger">
        Delete blog
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete blog</ModalHeader>
              <ModalBody>Are you sure to delete this blog?</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={handleDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
