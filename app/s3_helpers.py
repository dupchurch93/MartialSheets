import boto3
import botocore
import os
import uuid

s3 = boto3.client(
   "s3",
   aws_access_key_id=os.environ.get("S3_KEY"),
   aws_secret_access_key=os.environ.get("S3_SECRET")
)

BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"http://{BUCKET_NAME}.s3.amazonaws.com/"

ALLOWED_EXTENSIOINS = {"pdf", "png", "jpg", "jpeg", "gif"}


def allowed_file(filename):
    '''check if file is an allowed extension by looking at the extensioni
    after splitting on the "." '''
    return "." in filename and \
        filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIOINS


def get_unique_filename(filename):
    '''provide a unique file name for the file'''
    ext = filename.rsplit(".", 1)[1].lower()
    unqiue_filename = uuid.uuid4().hex
    return f"{unqiue_filename}.{ext}"


def upload_file_to_s3(file, acl="public-read"):
    try:
        print('file', file)
        print('bucket name', BUCKET_NAME)
        print('file name', file.filename)
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        # in case the our s3 upload fails
        return {"errors": str(e)}

    return {"url": f"{S3_LOCATION}{file.filename}"}
