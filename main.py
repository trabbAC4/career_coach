import openai
openai.api_key = "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"


completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "Write an essay about penguins" }])
print(completion.choices[0].message.content)


'''
def lambda_handler(event, context):
    module = boto3.client("Module_name")
    s3 = boto3.client("s3")
    queried_information = s3.get_object()
    file_content = fileObj["Body"].read()

    print(response)
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

    Careers: 
        {Software Engineer:
            Frontend Developer
            Backend Developer
            Database 
            Cloud architect 
        
        
        Data Scientist:

        Nurse

        Doctor
        }


def main():
    careers= {'Software Developer': 'Interested in tech', 'Nursing': 'Interested in helping others within medicine realm', 
                'Lawyer': 'Interested in working for the law and justice'}
    user_input = input("Hello, please feel free to let me know what you are interested in career wise")
    choices = input("Are you interested in: tech, medicine, or law ")
    for key in careers:
        if choices in careers[key]:
            option = key
    print("You are interested in being a :",  option)

main()
'''



#Utilize Lambda for custom code based on formatted data 
#Keep Amazon Lex as source of formatted data 
