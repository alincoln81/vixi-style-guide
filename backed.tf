terraform {
  required_version = ">= 0.12.2"

  backend "s3" {
    region         = "ap-northeast-1"
    bucket         = "tfg-apnortheast1-terraform-state"
    key            = "terraform.tfstate"
    dynamodb_table = "tfg-apnortheast1-terraform-state-lock"
    profile        = "659764204348_AdministratorAccess"
    role_arn       = ""
    encrypt        = "true"
  }
}
