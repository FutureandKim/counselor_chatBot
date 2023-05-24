


'''
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

#SentenceBERT 모델 로드
model = SentenceTransformer('jhgan/ko-sroberta-multitask')
sentences = ["안녕하세요?", "한국어 문장 임베딩을 위한 버트 모델입니다."]
embeddings = model.encode(sentences)

#데이터셋 로드
df = pd.read_csv('mainPage/wellness_dataset_original.csv')


#전처리
df = df.drop(columns=['Unnamed: 3'])
df.head()


df = df[~df['챗봇'].isna()]
df.head()


df.loc[1, '유저']
model.encode(df.loc[1, '유저'])

#유저 대화내용 인코딩
df['embedding'] = pd.Series([[]] * len(df)) # dummy
df['embedding'] = df['유저'].map(lambda x: list(model.encode(x)))
df.head()

df.to_csv('mainPage/wellness_dataset.csv', index=False)



def chat_answer(input):
    embedding = model.encode(input)
    df['distance'] = df['embedding'].map(lambda x: cosine_similarity([embedding], [x]).squeeze())
    df.head()
    answer = df.loc[df['distance'].idxmax()]
    return answer['챗봇']



text = '외로워'#'요즘 머리가 아프고 너무 힘들어'


answer = df.loc[df['distance'].idxmax()]

print('구분', answer['구분'])
print('유사한 질문', answer['유저'])
print('챗봇 답변', answer['챗봇'])
print('유사도', answer['distance'])
'''
