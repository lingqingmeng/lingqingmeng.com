SSH_STRING:=ubuntu@54.183.8.119

ssh:
	ssh $(SSH_STRING)


deploy-site:
	scp -r ./public/* $(SSH_STRING):~/ondecentral.com/


