import { useCallback, useState} from "react";
import { MainLayout } from "../../Layout";
import { Main } from '../Main/Main'
import { useParams } from "react-router-dom";



export function Home () {

  const [currentComponent, setCurrentComponent] = useState<string>("main")

  const onContentRender = useCallback(() => {
    if(currentComponent === "main"){
      return <Main />
    }

  }, [currentComponent]);

  return (
      <MainLayout>
        {onContentRender()}
      </MainLayout>
  )
}