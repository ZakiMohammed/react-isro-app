import { ContainerModel } from "../models/Container"

const Container = (container: ContainerModel) => {
  return (
    <div className={`container mx-auto px-4 ${container.margin || 'my-4'}`}>
      {container.children}
    </div>
  )
}

export default Container