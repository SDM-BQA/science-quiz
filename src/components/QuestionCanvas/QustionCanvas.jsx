import topicsData from '../../assets/jsonFiles/questions.json'

const QustionCanvas = ({topicName}) => {

    const findTopicByName = (topicName)=>{
        return topicsData.find(topic => topic.topic_name === topicName)
    }

    const topicData = findTopicByName(topicName)
  return (
    <div>{topicData.topic_name}</div>
  )
}

export default QustionCanvas