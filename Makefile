all: clean
	./node_modules/.bin/broccoli build _site


clean:
	rm -rf _site tmp


setup:
	bundle install
	npm install

	./node_modules/.bin/bower install


server:
	./node_modules/.bin/broccoli serve


.PHONY: *
